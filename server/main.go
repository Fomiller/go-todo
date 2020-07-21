package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/go", indexhandler)

	http.ListenAndServe(":8080", nil)
}

func indexhandler(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(res, "welcome to go")
}
