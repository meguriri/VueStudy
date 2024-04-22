package common

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"study/model"
)

var DB *gorm.DB

func InitDB() {
	host := "localhost"
	port := "3306"
	database := "ginessential"
	username := "root"
	password := "xyy001019"
	charset := "utf8"
	args := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true",
		username, password, host, port, database, charset)
	db, err := gorm.Open(mysql.Open(args), &gorm.Config{})
	if err != nil {
		panic("fail to connect database,err: " + err.Error())
	}
	db.AutoMigrate(&model.User{})
	DB = db
}
