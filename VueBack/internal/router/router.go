package router

import (
	h "VueBack/internal/handler"
	"github.com/gin-gonic/gin"
)

func Router() *gin.Engine {
	r := gin.Default()
	UserGroup := r.Group("/user")
	{
		UserGroup.POST("/sign", h.Sign())
	}
	return r
}
