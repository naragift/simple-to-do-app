package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func main() {
	fmt.Print("Hello World")
	app := fiber.New()

	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		returnc.
	})
}
