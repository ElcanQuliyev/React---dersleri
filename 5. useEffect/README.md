## useEffect nümunəsi

Bu nümunədə `useEffect` hook-un müxtəlif işləmə halları göstərilir.

### Kod

```javascript
import { useEffect, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Hər render olanda işləyir
  useEffect(() => {
    console.log("Her render olanda isleyir");
  });

  // Yalnız ilk render olanda işləyir
  useEffect(() => {
    console.log("Ilk render olanda isleyir");
  }, []);

  // firstName dəyişəndə işləyir
  useEffect(() => {
    console.log("Ad deyisdi:", firstName);
  }, [firstName]);

  // firstName və ya lastName dəyişəndə işləyir
  useEffect(() => {
    console.log("Ad ve ya soyad deyisdi");
  }, [firstName, lastName]);

  return (
    <div>
      <button onClick={() => setFirstName("Elcan")}>
        Ad dəyiş
      </button>

      <button onClick={() => setLastName("Quliyev")}>
        Soyad dəyiş
      </button>
    </div>
  );
}

export default App;
```

### İzah

Bu nümunədə:

* `useEffect()` dependency olmadan → **hər render olanda işləyir**
* `useEffect(..., [])` → **yalnız ilk render olanda işləyir**
* `useEffect(..., [firstName])` → **firstName dəyişəndə işləyir**
* `useEffect(..., [firstName, lastName])` → **hər iki state dəyişəndə işləyir**
