package models

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/fomiller/go-todo/server/config"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Todo struct {
	Todo      string
	Completed bool
	Time      time.Time
}

var (
	collection *mongo.Collection
)

// create todo collection from mongoDB
func init() {
	collection = config.CLIENT.Database("go-todo").Collection("todos")
}

// Return all Todos
func FindAll() []*Todo {
	// create slice to documents in
	var results []*Todo

	// query mongo database
	cur, err := collection.Find(context.TODO(), bson.D{{}})
	if err != nil {
		log.Panic(err)
	}
	// close cursor
	defer cur.Close(context.TODO())

	// iterate through cursor and storing decoded documents inside reults variable
	for cur.Next(context.TODO()) {
		var elem Todo
		err := cur.Decode(&elem)
		if err != nil {
			log.Panic(err)
		}

		// store decoded value in results
		results = append(results, &elem)
	}

	// if the cursor at any time returns an error log the error
	if err := cur.Err(); err != nil {
		log.Panic(err)
	}

	fmt.Printf("Found multiple documents (array of pointers) : %v\n", results)
	return results
}

func FindOne() {

}

func CreateTodo() {

}

func UpdateTodo() {

}

func DeleteTodo() {

}
