# 안녕하세요

## 반갑습니다

```js
console.log(3)
```

```java
public class Test{
    private String name;

}
```

|테이블|ㅇㄹㅇ|ㅇㄹㅇ|
|-----|------|------|
|1|2|3|
|4|5|6|


### Code

```css
.wrapper{
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: 40px 100px 40px;
    width: 100%;
}
.header  {grid-column: span 12; background: red;}
.menu    {grid-column: span 3; background: orange;}
.content {grid-column: sapn 9; background: green;}
.footer  {grid-column: span 12; background: purple;}

@media screen and (max-width : 980px) {
    .header{grid-column: span 6;}
    .menu{grid-row: 1; grid-column: span 6;}
    .content{grid-column: span 12;}
}

```

```html
<div class="wrapper">
    <div class="header">HEADER</div>
    <div class="menu">MENU
        <ul>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
        </ul>
    </div>
    <div class="contents">CONTENTS</div>
    <div class="footer">FOOTER</div>
</div>
```
### Output

<style>
    .wrapper{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: 40px 100px 40px;
        width: 100%;
    }
    .header  {grid-column: span 12; background: red;}
    .menu    {grid-column: span 3; background: orange;}
    .content {grid-column: sapn 9; background: green;}
    .footer  {grid-column: span 12; background: purple;}

    @media screen and (max-width : 980px) {
        .header{grid-column: span 6;}
        .menu{grid-row: 1; grid-column: span 6;}
        .content{grid-column: span 12;}
    }
</style>
<div class="wrapper">
    <div class="header">HEADER</div>
    <div class="menu">MENU
        <ul>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
        </ul>
    </div>
    <div class="contents">CONTENTS</div>
    <div class="footer">FOOTER</div>
</div>

