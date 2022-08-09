
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const mass = []
  if (matrix !== undefined) {
    matrix.forEach((mas, num) => {
      if (num % 2 === 0) {
        matrix[num].forEach((value) => {
          mass.push(value)
        })
      } else {
        for (let i = mas.length - 1; i >= 0; i--) {
          mass.push(mas[i])
        }
      }
    })
    return mass
  } else {
    return mass
  }
}
