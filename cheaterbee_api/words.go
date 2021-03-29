package main

import (
	"log"
	"os"
)

func printWord() string {
	return "blafuckerh"
}

func findWords(reqChar string, otherChars string) string {
	file, err := os.Open("dictionary.txt")

	if err != nil {
		log.Fatal(err)
	}

	return "words"
}
