package models

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/fomiller/go-todo/server/config"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Todo struct {
	Todo      string             `json:"todo" bson:"todo"`
	Completed bool               `json:"completed" bson:"completed"`
	Time      time.Time          `json:"time,omitempty" bson:"time,omitempty"`
	Id        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
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

func CreateTodo(req *http.Request) {
	// var newTodo Todo
	// decoder := json.NewDecoder(req.Body)
	// err := decoder.Decode(&newTodo)
	// if err != nil {
	// 	log.Panic(err)
	// }
	newTodo := Todo{}
	json.NewDecoder(req.Body).Decode(&newTodo)
	newTodo.Time = time.Now()
	fmt.Printf("TEST: %v", newTodo)

	insertResult, err := collection.InsertOne(context.TODO(), newTodo)
	if err != nil {
		log.Panic(err)
	}
	fmt.Println("inserted a single document", insertResult)
	// var newTodo = Todo{"todo-1", false, time.Now()}
	// insertResult, err := collection.InsertOne(context.TODO(), newTodo)
	// if err != nil {
	// 	log.Panic(err)
	// }
	// fmt.Println("new todo created: ", insertResult)
}

func UpdateTodo() {

}

func DeleteTodo() {

}
