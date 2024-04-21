package model

import (
	"gorm.io/gorm"
	"log"
)

type User struct {
	gorm.Model
	UserID       int    `gorm:"primaryKey" json:"user_id"`
	UserName     string `json:"user_name"`
	UserPassword string `json:"user_password"`
}

func (u User) Sign() {
	db.First(&u, u.UserID)
	log.Println("userName", u.UserName)
}
