package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"math/rand"
	"net/http"
)

func main() {
	r := gin.Default()
	r.POST("/api/auth/register", func(c *gin.Context) {
		//获取参数
		name := c.PostForm("name")
		telephone := c.PostForm("telephone")
		password := c.PostForm("password")
		//数据验证
		if len(telephone) != 11 {
			c.JSON(http.StatusUnprocessableEntity, gin.H{
				"code": 422,
				"msg":  "手机号必须为11位",
			})
		}
		if len(password) < 6 {
			c.JSON(http.StatusUnprocessableEntity, gin.H{
				"code": 422,
				"msg":  "密码不能少于6位",
			})
		}
		if len(name) == 0 {
			name = RandomString(10)
		}
		log.Println(name, telephone, password)
		//判断手机号是否存在

		//创建用户

		//返回结果

	})
	panic(r.Run())
}

func RandomString(n int) string {
	var letter = []byte("asdfghjklqwertyuiopzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM")
	result := make([]byte, n)
	for i := range result {
		result[i] = letter[rand.Intn(len(letter))]
	}
	return string(result)
}
