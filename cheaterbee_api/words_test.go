package main

import "testing"

func TestPrintWord(t *testing.T) {
	word := printWord()
	if word != "blah" {
		t.Errorf("The word is %s; wanted 'blah'", word)
	}

}
