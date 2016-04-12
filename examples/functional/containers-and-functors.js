// Container

export class Container {
  constructor(value) {
    this.__value = value;
  }

  map(func) {
    return new Container(func(this.__value));
  }
}

Container.of = (value) => new Container(value);

// Maybe

export class Maybe {
  constructor(value) {
    this.__value = value;
  }

  isNothing() {
    return (this.__value === null || this.__value === undefined);
  }

  map(func) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(func(this.__value));
  }
}

Maybe.of = (value) => new Maybe(value);