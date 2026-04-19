import { pow, abs } from "mathjs";

export class PolynomialRegression {
  constructor(points, x, order) {
    this.points = [...points];
    this.x = x;
    this.order = order;
    this.n = points.length;
  }

  solve() {
    const m = this.order + 1;
    const sumX = new Array(2 * this.order + 1).fill(0);
    const sumY = new Array(this.order + 1).fill(0);

    for (let i = 0; i < this.points.length; i++) {
      for (let j = 0; j < sumX.length; j++) {
        sumX[j] += pow(this.points[i].x, j);
      }
      for (let j = 0; j < sumY.length; j++) {
        sumY[j] += this.points[i].y * pow(this.points[i].x, j);
      }
    }

    // เมทริกซ์ [A|B]
    let augMatrix = Array.from({ length: m }, () => new Array(m + 1).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        augMatrix[i][j] = sumX[i + j];
      }
      augMatrix[i][m] = sumY[i];
    }

    // Gauss-Jordan
    for (let i = 0; i < m; i++) {
      let pivotRow = i;
      for (let k = i + 1; k < m; k++) {
        if (abs(augMatrix[k][i]) > abs(augMatrix[pivotRow][i])) {
          pivotRow = k;
        }
      }
      [augMatrix[i], augMatrix[pivotRow]] = [augMatrix[pivotRow], augMatrix[i]];

      const pivot = augMatrix[i][i];
      if (Math.abs(pivot) < 1e-9) throw new Error("Matrix is singular");
      for (let j = i; j <= m; j++) {
        augMatrix[i][j] /= pivot;
      }

      for (let k = 0; k < m; k++) {
        if (k !== i) {
          const factor = augMatrix[k][i];
          for (let j = i; j <= m; j++) {
            augMatrix[k][j] -= factor * augMatrix[i][j];
          }
        }
      }
    }

    const coefficients = augMatrix.map((row) => row[m]);
    
    let fx = 0;
    for (let i = 0; i < coefficients.length; i++) {
      fx += coefficients[i] * pow(this.x, i);
    }

    
    return { coefficients,fx};
  }
}
