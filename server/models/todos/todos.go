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
	Time      string             `json:"time,omitempty" bson:"time,omitempty"`
	Id        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
}

type Test_struct struct {
	ID string
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

	return results
}

func FindOne() {

}

func CreateTodo(req *http.Request) {
	newTodo := Todo{}
	newTodo.Time = time.Now().Format("Jan-02-2006")
	json.NewDecoder(req.Body).Decode(&newTodo)

	insertResult, err := collection.InsertOne(context.TODO(), newTodo)
	if err != nil {
		log.Panic(err)
	}
	fmt.Println("inserted a single document", insertResult)
}

func UpdateTodo(req *http.Request) {
	updateTodo := Todo{}
	json.NewDecoder(req.Body).Decode(&updateTodo)
	filter := bson.D{{Key: "_id", Value: updateTodo.Id}}
	update := bson.M{"$set": bson.M{"Completed": !updateTodo.Completed}}

	updateResult, err := collection.UpdateOne(
		context.TODO(),
		filter,
		update,
	)
	if err != nil {
		log.Panic(err)
	}

	// fmt.Printf("Update Result: %v", updateTodo.Id)
	// fmt.Printf("Update Result: %v", updateTodo.Completed)
	fmt.Printf("Update Result: %v", updateResult)
}

func DeleteTodo(req *http.Request) {
	// init variables to hold data
	newTodo := Todo{}
	// decode req.Body
	json.NewDecoder(req.Body).Decode(&newTodo)

	// delete Todo from database
	deleteResult, err := collection.DeleteOne(context.TODO(), bson.M{"_id": newTodo.Id})
	if err != nil {
		log.Panic(err)
	}
	fmt.Println("single document was deleted: ", deleteResult)

}
