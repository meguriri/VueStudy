package handler

import (
	"VueBack/internal/model"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func Sign() gin.HandlerFunc {
	return func(c *gin.Context) {
		UserId, _ := strconv.Atoi(c.PostForm("UserId"))
		UserPassword := c.PostForm("UserPassword")
		user := model.User{
			UserID:       UserId,
			UserPassword: UserPassword,
		}
		user.Sign()
		c.JSON(http.StatusOK, gin.H{
			"code": 200,
			"msg":  user.UserName,
		})
	}
}
