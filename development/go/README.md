# Go

## Hello World

Below code shows a hello world example of a Go application.

- Copy and paste the below code into a .go file.

```
package main
import (
  "fmt"
)
func main() {
  fmt.Println("Hello World!")
}
```

## Commands

- Compile and execute go file. e.g. Go filename is main.go

```
go run main.go
```

- Run go file

```
go run .
```

- Build command.

```
go build
```

- Run built file, name will be same as folder files are contained in. e.g. app

```
./app
```

- Download online packages which get stored to src folder of $GOPATH

```
go get [Url to package]
```

- Running tests

```
go test -v .
```

- Running tests with race condition

```
go test -race
```