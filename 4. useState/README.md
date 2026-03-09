## useState (React)

Bu gün React-da **useState hook** istifadə etməyi öyrəndim.

`useState` komponent daxilində **state (yəni dəyişə bilən məlumat)** saxlamaq üçün istifadə olunur. State dəyişəndə komponent avtomatik olaraq yenidən render olunur və UI yenilənir.

### Sintaksis

```javascript
const [state, setState] = useState(initialValue);
```

* **state** → hazırkı dəyər
* **setState** → state-i dəyişən funksiya
* **initialValue** → başlanğıc dəyər

### Sadə nümunə

```javascript
import { useState } from "react";

function App() {
  const [name, setName] = useState("Elcan");

  return (
    <div>
      <h1>{name}</h1>

      <button onClick={() => setName("Elnur")}>
        Change Name
      </button>
    </div>
  );
}
```

Bu nümunədə:

* `name` state-də saxlanılır
* `setName` ilə state dəyişdirilir
* düyməyə klik edəndə ekrandakı ad dəyişir

### Array ilə istifadə

`useState` ilə array də saxlamaq mümkündür.

```javascript
const [names, setNames] = useState(["Elcan", "Elnur", "Eltun"]);
```

Array-dəki məlumatları göstərmək üçün `map()` istifadə olunur.

```javascript
{names.map((name, index) => (
  <div key={index}>{name}</div>
))}
```

### Nəticə

`useState` React-da **interaktiv və dinamik UI yaratmaq üçün əsas hook-lardan biridir**.

