package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

func getUser(c echo.Context) error {
	return c.String(http.StatusOK, printWord())
}

func main() {
	fmt.Println("hello bee cheater bitches")
	fmt.Println("blah")

	// this is the webserver
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, Stupidface!")
	})
	e.GET("/users/:id", getUser)

	e.Logger.Fatal(e.Start(":5000"))

}
