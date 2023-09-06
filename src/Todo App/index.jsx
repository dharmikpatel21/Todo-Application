import React, { Component, createRef } from 'react';

export default class Todo extends Component {
    state = {
        todoList: [],
        todoStatus: 'all',
    };
    inputRef = createRef();
    addTodo = (e) => {
        e.preventDefault();
        const todoText = this.inputRef.current;
        if (todoText) {
            this.setState(
                ({ todoList }) => ({
                    todoList: [
                        ...todoList,
                        {
                            text: todoText.value,
                            id: new Date().valueOf(),
                            isDone: false,
                        },
                    ],
                }),
                () => {
                    this.inputRef.current.value = '';
                },
            );
        }
    };
    toggleCompleted = (item) => {
        this.setState(({ todoList }, props) => {
            const index = todoList.findIndex((x) => x.id === item.id);
            return {
                todoList: [
                    ...todoList.slice(0, index),
                    { ...item, isDone: !item.isDone },
                    ...todoList.slice(index + 1),
                ],
            };
        });
    };
    deleteTodo = (item) => {
        this.setState(({ todoList }, props) => {
            const index = todoList.findIndex((x) => x.id === item.id);
            return {
                todoList: [
                    ...todoList.slice(0, index),
                    ...todoList.slice(index + 1),
                ],
            };
        });
    };
    changeTodoStatus = (state) => {
        this.setState({ todoStatus: state });
    };
    render() {
        const { todoList, todoStatus } = this.state;
        console.log('render');
        return (
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-2xl font-serif my-4">Todo App</h1>
                <form className="flex" onSubmit={this.addTodo}>
                    <div>
                        <label htmlFor="todoText" className="sr-only">
                            Todo Text
                        </label>
                        <input
                            type="text"
                            id="todoText"
                            className="rounded-l-md"
                            ref={this.inputRef}
                        />
                    </div>
                    <button type="Submit" className="btn rounded-l-none">
                        Add Todo
                    </button>
                </form>
                <div className="w-full my-4 flex-1">
                    {todoList
                        .filter((x) => {
                            switch (todoStatus) {
                                case 'Completed':
                                    return x.isDone === true;
                                case 'Pending':
                                    return x.isDone === false;
                                default:
                                    return true;
                            }
                        })
                        .map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="flex items-center m-4"
                                >
                                    <div>
                                        <label
                                            htmlFor="isCompleted"
                                            className="sr-only"
                                        >
                                            is Completed
                                        </label>
                                        <input
                                            type="checkbox"
                                            name="isCompleted"
                                            id="isCompleted"
                                            checked={item.isDone}
                                            onChange={() =>
                                                this.toggleCompleted(item)
                                            }
                                        />
                                    </div>
                                    <p className="flex-1 px-2">{item.text}</p>
                                    <button
                                        className="btn"
                                        onClick={() => this.deleteTodo(item)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })}
                </div>
                <div className="w-full flex">
                    <button
                        type="button"
                        className="btn rounded-none flex-1"
                        onClick={() => this.changeTodoStatus('all')}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="btn rounded-none flex-1"
                        onClick={() => this.changeTodoStatus('Pending')}
                    >
                        Pending
                    </button>
                    <button
                        type="button"
                        className="btn rounded-none flex-1"
                        onClick={() => this.changeTodoStatus('Completed')}
                    >
                        Completed
                    </button>
                </div>
            </div>
        );
    }
}
