const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const port = process.env.PORT || 7000
require('dotenv').config()

// middle ware -------------------------
app.use(express.json())
app.use(cors())
console.log(process.env.DB_NAME);
console.log(process.env.DB_PASS);

// token varify middle ware ----------------------
const tokenVarify = (req, res, next) => {
    console.log('---------------', req.headers.authorization, '---------------',);
    // console.log({ req });
    // console.log({req});
    if (!req.headers.authorization) {
        res.status(401).send({ Message: "Unauthorize" })
    }
    const token = req.headers.authorization.split(' ')[1]
    // token varify ---------
    jwt.verify(token, process.env.SECRET_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(401).send({ Message: "Unauthorize" })
        }
        // console.log({ decoded });
        req.decoded = decoded


        next()
    });
}

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.xevn9vs.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();


        const menuCollection = client.db("bistroDB").collection('menu')
        const reviewsCollection = client.db("bistroDB").collection('reviews')
        const cartsCollection = client.db("bistroDB").collection('carts')
        const usersCollection = client.db("bistroDB").collection('users')

        // verify admin middleWare  ------------
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>', email);
            const query = { email: email }
            const user = await usersCollection.findOne(query)
            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>', user);
            const isAdmin = user?.role === 'admin'
            // console.log({ isAdmin });
            console.log(`${email} Admin roll:---> ${isAdmin}`);
            // if (!isAdmin) {
            //     return res.status(403).send({ Message: 'Forbiden access' })
            // }
            next()
        }


        // all menu get api
        app.get('/menu', async (req, res) => {
            const result = await menuCollection.find().toArray()
            res.send(result)
        })

        //admin  menu post  api
        app.post('/menu', tokenVarify, verifyAdmin, async (req, res) => {
            try {
                const data = req.body;
                // console.log({ data });
                // console.log(data);
                const result = await menuCollection.insertOne(data)
                res.send(result)
                console.log("Admin menu add success: ", data?.name);
            }
            catch (errr) {
                console.log(errr);
            }
        })

        //  menu item delete api / manage all item page
        app.delete('/menu/:id', tokenVarify, verifyAdmin, async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) }
                const result = await menuCollection.deleteOne(query)
                res.send(result)
                console.log("Admin menu deleted success",);
            }
            catch (errr) {
                console.log(errr);
            }
        })
        // rewiews
        app.get('/reviews', async (req, res) => {
            try {
                const result = await reviewsCollection.find().toArray()
                res.send(result)
            }
            catch (err) {
                console.log(err);
                res.send(err)
            }
        })

        // user add to cart food 
        app.post('/carts', async (req, res) => {
            try {
                const data = req.body
                console.log(data);
                const result = await cartsCollection.insertOne(data)
                res.send(result)
            }
            catch (err) {
                console.log(err);
                res.send({ err })
            }
        })

        // user add to cart food 
        app.get('/carts', async (req, res) => {
            try {
                const email = req?.query?.email
                console.log({ email },);
                const query = { email: email }
                const result = await cartsCollection.find(query).toArray()
                res.send(result)
            }
            catch (err) {
                console.log(err);
                res.send({ err })
            }
        })

        // user cart page item delete 
        app.delete('/carts/:id', async (req, res) => {
            const id = req?.params?.id
            const query = { _id: new ObjectId(id) }
            const result = await cartsCollection.deleteOne(query)
            console.log(result);
            res.send(result)
        })
        // // specific user card item counte
        // app.get('/carts_all_item', async (req, res) => {
        //     const result = await cartsCollection.countDocuments()
        //     console.log(result);
        //     res.send({ result })
        // })



        // user save api -------------
        app.post('/users', async (req, res) => {

            try {
                const user = req.body;

                const query = { email: user.email }
                const isExist = await usersCollection.findOne(query)
                if (isExist) {
                    console.log({ isExist });
                    return res.send({ Message: "This user already axist", insertedId: null })
                }
                const result = await usersCollection.insertOne(user)
                res.send(result)
                console.log("Save this user: ", user);
            }
            catch (err) {
                res.send("User Not Save: ", err)
                console.log(err);
            }
        })

        // all users get api -------------
        app.get('/users', tokenVarify, async (req, res) => {

            try {
                const result = await usersCollection.find().toArray()
                res.send(result)
                console.log("All users get ");
            }
            catch (err) {
                res.send("All Don't get: ", err)
                console.log(err);
            }
        })

        // admin  users delete api -------------
        app.delete('/users/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = { _id: new ObjectId(id) }

                const result = await usersCollection.deleteOne(query)
                res.send(result)
                console.log("Admin This user delete: ", result);
            }
            catch (err) {
                res.send("Admin user deleted failed")
                console.log(err);
            }
        })

        // make admin api ----------------
        app.patch('/users/admin/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const filter = { _id: new ObjectId(id) }
                const updatedDoc = {
                    $set: {
                        role: 'admin'
                    }
                }
                const result = await usersCollection.updateOne(filter, updatedDoc)
                res.send(result)
            }
            catch (err) {
                res.send({ message: "Admin create failed" })
                console.log(err);
            }
        })
        // admin role get api ----------
        app.get('/users/admin/:email', tokenVarify, verifyAdmin, async (req, res) => {
            try {
                const email = req.params?.email
                // console.log({email});
                // console.log(req.decoded.email ,'---------------');
                // if (email !== req.decoded.email) {
                //     return res.status(403).send({ Message: 'Forbiden access' })
                // }
                const query = { email: email }
                const user = await usersCollection.findOne(query)
                console.log({ user });
                let admin = false
                if (user) {
                    admin = user?.role === "admin"
                }
                console.log({ 'This user is admin: ': admin });
                res.send({ admin })
            }
            catch (err) {
                console.log(err);
            }

        })
        // tokent create  api 
        app.post('/jwt', async (req, res) => {
            try {
                const user = req.body
                console.log(user);
                const token = jwt.sign(user, process.env.SECRET_TOKEN, {
                    expiresIn: '2h'
                })
                res.send({ token })
                console.log(token);
            }
            catch (err) {
                res.status(402).send({ message: 'Token Not Create' })
                console.log(err);
            }


        })



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("<h1>Bistro Boss Is Running</h1>")
})

app.listen(port, () => {
    console.log(`Bistro server is running on port: ${port}`);
})