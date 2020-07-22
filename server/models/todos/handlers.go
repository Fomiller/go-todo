package models

import (
	"encoding/json"
	"net/http"
)

func Test(res http.ResponseWriter, req *http.Request) {
	// fmt.Println("test")
	// fmt.Fprintf(res, "working")
	todos := FindAll()
	json.NewEncoder(res).Encode(todos)
}
