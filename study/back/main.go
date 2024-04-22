package main

import (
	_ "gorm.io/driver/mysql"
	"study/common"
	"study/router"
)

func main() {
	common.InitDB()
	r := router.InitRouter()
	panic(r.Run())
}
