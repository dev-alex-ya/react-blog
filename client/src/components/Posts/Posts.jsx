import React from 'react';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.filter}>
              <form>
                <input className={classes.date} type="date"></input>
                <input className={classes.submit} type="submit" value="Фильтр"></input>
              </form>
            </div>
            <div className={classes.list}>
              <div className={classes.post}>
                <h2 className={classes.title}>
                  First post
                </h2>
                <div className={classes.pubDate}>2 декабря 2019 г</div>
                <article>
                  <p>
                    Если функция не применима к устройству, 
                    на котором работает браузер, выражения, 
                    включающие эту функцию, всегда ложны. 
                    Например, стили, вложенные в следующий 
                    запрос, никогда не будут использоваться, 
                    потому что ни одно речевое устройство 
                    не имеет формат экрана:
                  </p>
                  <p>
                    Если вы создаете медиа-запрос без указания 
                    значения, вложенные стили будут использоваться 
                    до тех пор, пока значение функции не равно 
                    нулю. Например, этот CSS будет применяться 
                    к любому устройству с цветным экраном:
                  </p>
                </article>
              </div>
              <div className={classes.post}>
                <h2 className={classes.title}>
                  Second post
                </h2>
                <div className={classes.pubDate}>5 декабря 2019 г</div>
                <article>
                  <p>
                    Если функция не применима к устройству, 
                    на котором работает браузер, выражения, 
                    включающие эту функцию, всегда ложны. 
                    Например, стили, вложенные в следующий 
                    запрос, никогда не будут использоваться, 
                    потому что ни одно речевое устройство 
                    не имеет формат экрана:
                  </p>
                  <p>
                    Если вы создаете медиа-запрос без указания 
                    значения, вложенные стили будут использоваться 
                    до тех пор, пока значение функции не равно 
                    нулю. Например, этот CSS будет применяться 
                    к любому устройству с цветным экраном:
                  </p>
                </article>
              </div>
            </div>
        </div>
    );
}
export default Posts;