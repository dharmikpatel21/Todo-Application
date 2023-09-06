import React, { Component, createRef } from 'react';

export default class Todo extends Component {
    state = {
        todoList: [],
    };
    inputRef = createRef();
    addTodo = (e) => {
        e.preventDefault();
        const todoText = this.inputRef.current;
        if (todoText) {
            this.setState(
                ({ todoList }) => ({
                    todoList: [...todoList, todoText.value],
                }),
                () => {
                    this.inputRef.current.value = '';
                },
            );
        }
    };
    render() {
        const { todoList } = this.state;
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
                    {todoList.map((item) => {
                        return (
                            <div className="flex items-center m-4">
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
                                    />
                                </div>
                                <p className="flex-1 px-2">{item}</p>
                                <button className="btn">Delete</button>
                            </div>
                        );
                    })}
                    <div className="flex items-center mx-4">
                        <div>
                            <label htmlFor="isCompleted" className="sr-only">
                                is Completed
                            </label>
                            <input
                                type="checkbox"
                                name="isCompleted"
                                id="isCompleted"
                            />
                        </div>
                        <p className="flex-1 px-2">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <button className="btn">Delete</button>
                    </div>
                </div>
                <div className="w-full flex">
                    <button type="button" className="btn rounded-none flex-1">
                        All
                    </button>
                    <button type="button" className="btn rounded-none flex-1">
                        Pending
                    </button>
                    <button type="button" className="btn rounded-none flex-1">
                        Completed
                    </button>
                </div>
            </div>
        );
    }
}
