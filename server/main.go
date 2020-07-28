package main

import (
	"net/http"

	models "github.com/fomiller/go-todo/server/models/todos"
)

func main() {
	// serve static files
	fs := http.FileServer(http.Dir("../client/"))
	http.Handle("/", fs)

	// routes.
	http.HandleFunc("/api/todo/", models.TodoHandler)
	// http.HandleFunc("/api/create/", models.CreateTodo)

	// start server.
	http.ListenAndServe(":8080", nil)
}
