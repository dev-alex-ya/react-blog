import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ()=>{
    return (
        <header className={classes.header}>
            <div className="container">
            <nav className={classes.navbar}>
                <ul className={classes.menu}>
                    <NavLink activeClassName={classes.active} to="/posts" className={classes.item}>Статьи</NavLink>
                    <NavLink activeClassName={classes.active} to="/feedback" className={classes.item}>Задать вопрос</NavLink>
                    <NavLink activeClassName={classes.active} to="/about" className={classes.item}>Обо мне</NavLink>
                    <NavLink activeClassName={classes.active} to="/consultation" className={classes.item}>Консультация</NavLink>
                </ul>
                <form action="" class={classes.searchBar}>
                    <input type="search" name="search" pattern=".*\S.*" required></input>
                    <button class={classes.searchBtn} type="submit">
                        <span>Search</span>
                    </button>
                </form>
            </nav>
            </div>
        </header>
    );
};
export default Header;