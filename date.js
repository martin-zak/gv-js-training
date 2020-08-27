function f() {
    console.log(new Date());
    setTimeout(f, 1000);
}

f();