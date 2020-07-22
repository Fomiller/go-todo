package main

import (
	"fmt"
	"net/http"

	models "github.com/fomiller/go-todo/server/models/todos"
)

func main() {
	// serve static files
	fs := http.FileServer(http.Dir("../client/"))
	http.Handle("/", fs)
	// routes.
	// http.HandleFunc("/", indexhandler)
	http.HandleFunc("/api/todo/", models.Test)
	// http.HandleFunc("/api/create/", models.CreateTodo)

	// start server.
	http.ListenAndServe(":8080", nil)
}

func indexhandler(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(res, "welcome to go")
}
