package config

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var CLIENT *mongo.Client

func init() {
	// init err variable
	var err error

	// create clientOptions for connecting to MONGO.
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	// connect to mongo and return a pointer to a mongo client.
	CLIENT, err = mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Panic(err)
	}

	// check connection.
	err = CLIENT.Ping(context.TODO(), nil)
	if err != nil {
		log.Panic(err)
	}
	// successful connection.
	fmt.Println("Connected to MongoDB")
}
