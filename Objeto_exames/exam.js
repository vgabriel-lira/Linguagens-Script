export class Exam {
  constructor(answer, weight) {
    this.answer = answer
    this.weight = weight
    this.list = [] // lista de provas
  }

  add(test) {
    // começa com nota 0
    let score = 0

    // respostas do aluno
    for (let q in test.values) {
      // vê se acertou a questão
      if (test.values[q] === this.answer.values[q]) {
        score += this.weight[q]
      }
    }

    test.grade = score
    this.list.push(test)
  }

  avg() {
    // soma todas as notas e divide pela quantidade
    let total = 0
    for (let item of this.list) {
      total += item.grade
    }
    return total / this.list.length
  }

  min(qtd = 1) {
    const notas = this.list.map(a => a.grade).sort((a, b) => a - b)
    return notas.slice(0, qtd)
  }

  max(qtd = 1) {
    const notas = this.list.map(a => a.grade).sort((a, b) => a - b)
    return notas.slice(-qtd)
  }

  lt(valor) {
    // notas menores que o valor
    return this.list
      .map(a => a.grade)
      .filter(nota => nota < valor)
  }

  gt(valor) {
    // notas maiores que o valor
    return this.list
      .map(a => a.grade)
      .filter(nota => nota > valor)
  }
}
