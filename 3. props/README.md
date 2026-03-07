# React Props Nümunəsi

## Layihə haqqında

Bu layihə **React-də Props istifadəsini** göstərmək üçün hazırlanıb.
Props vasitəsilə **parent komponentdən child komponentə məlumat ötürmək** mümkündür. Bu isə komponentlərin daha **təkrar istifadə edilə bilən (reusable)** və dinamik olmasını təmin edir.

## Öyrəndiklərim

Bu layihədə aşağıdakı mövzuları öyrəndim:

- React-də **props nədir**
- **Parent komponentdən child komponentə məlumat göndərmək**
- Props istifadə edərək **dinamik məlumat göstərmək**
- Props vasitəsilə **reusable komponentlər yaratmaq**

## İstifadə olunan texnologiyalar

- React
- JavaScript (ES6)
- HTML
- CSS

## Layihə strukturu

src/
components/
Card.jsx
App.jsx
main.jsx

## İstifadə nümunəsi

Parent komponent:

```jsx
<Card
  title="React Props"
  description="Props komponentlər arasında məlumat ötürməyə imkan verir."
/>
```

Child komponent:

```jsx
function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
```

## Əsas məqam

Props **read-only** olur, yəni child komponent props-u dəyişə bilməz.
Props React-də **komponentlər arasında məlumat ötürmək üçün əsas üsullardan biridir.**

## Məqsəd

Bu layihənin məqsədi **React əsaslarını öyrənmək və props istifadəsini praktika etməkdir.**
