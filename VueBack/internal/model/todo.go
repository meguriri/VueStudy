package model

type Todo struct {
	Owner      int    `json:"owner" db:"owner"`
	TodoId     int    `json:"todo_id" db:"todo_id"`
	TodoTitle  string `json:"todo_title" db:"todo_title"`
	TodoStatus bool   `json:"todo_status" db:"todo_status"`
}
