package main

import (
	"fmt"
	"net/http"
)

func main() {
	// routes.
	http.HandleFunc("/", indexhandler)

	// start server.
	http.ListenAndServe(":8080", nil)
}

func indexhandler(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(res, "welcome to go")
}
