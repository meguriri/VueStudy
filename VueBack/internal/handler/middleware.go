package handler

import (
	"VueBack/internal/utils"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func CheckToken() gin.HandlerFunc {
	return func(c *gin.Context) {
		token := c.Query("token")
		claim, err := utils.ParseToken(token)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"code": 401,
				"msg":  "拒绝访问",
			})
			c.Abort()
			return
		}
		log.Println("[CheckToken] ", claim.UserId)
		c.Next()
	}
}

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {

	}
}
