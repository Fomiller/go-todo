package models

import (
	"encoding/json"
	"net/http"
)

func Test(res http.ResponseWriter, req *http.Request) {
	if req.Method == http.MethodGet {
		todos := FindAll()
		json.NewEncoder(res).Encode(todos)
	} else if req.Method == http.MethodPost {
		CreateTodo(req)
	}

}
