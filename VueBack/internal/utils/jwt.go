package utils

import (
	"errors"
	jwt "github.com/dgrijalva/jwt-go"
	"time"
)

var keyString = []byte("hello world")

type Claims struct {
	UserId int `json:"user_id"`
	jwt.StandardClaims
}

func GenerateToken(userId int) (string, error) {
	nowTime := time.Now()
	expireTime := nowTime.Add(time.Minute)
	claims := Claims{
		userId,
		jwt.StandardClaims{
			ExpiresAt: expireTime.Unix(),
			Issuer:    "test",
			Subject:   "Token",
		},
	}
	tokenClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := tokenClaims.SignedString(keyString)
	return token, err
}

func ParseToken(tokenStr string) (*Claims, error) {
	newClaim := &Claims{}
	token, err := jwt.ParseWithClaims(tokenStr,
		newClaim, func(token *jwt.Token) (interface{}, error) {
			return keyString, nil
		})
	if err != nil || !token.Valid {
		err = errors.New("invalid Token")
	}
	return newClaim, err
}
