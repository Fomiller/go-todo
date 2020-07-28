package models

import (
	"encoding/json"
	"net/http"
)

func TodoHandler(res http.ResponseWriter, req *http.Request) {
	if req.Method == http.MethodGet {
		todos := FindAll()
		json.NewEncoder(res).Encode(todos)
	}
	if req.Method == http.MethodPost {
		CreateTodo(req)
	}
	if req.Method == http.MethodDelete {
		DeleteTodo(req)
	}
	if req.Method == http.MethodPut {
		UpdateTodo(req)
	}
}
