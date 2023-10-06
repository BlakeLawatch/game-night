
export class gameNightPlayer {
  constructor(name) {
    this.name = name
    this.score = 0
  }
  get PlayerCard() {
    return `
      <div class="col-5 card bg-dark">
          <img class="img"
            src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZyUyMHBvbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
            alt="">
        </div>
        <div class="col-5 card bg-dark text-light">
          <p>${this.name}</p>
          <button class="btn btn-danger">-</button>
          <p>${this.score}</p>
          <button class="btn btn-success">+</button>
        </div>
    `
  }
}
