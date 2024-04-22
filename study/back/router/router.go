package router

import (
	"github.com/gin-gonic/gin"
	"study/handler"
	"study/middleware"
)

func InitRouter() *gin.Engine {
	r := gin.Default()
	r.POST("/api/auth/register", handler.Register)
	r.POST("/api/auth/login", handler.Login)
	r.GET("/api/auth/info", middleware.AuthMiddleware(), handler.Info)
	return r
}
