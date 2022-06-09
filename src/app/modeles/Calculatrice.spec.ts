import {Calculatrice} from "./Calculatrice";

describe(
  'je veux tester la classe Calculatrice',
  ()=>{
    it('doit retourner la somme des deux nombres',
      ()=>{
      let maCalculatrice = new Calculatrice();
      let nbre1 = 5;
      let nbre2 = 7;
      expect(maCalculatrice.addition(nbre1, nbre2)).toEqual(12);
      expect(maCalculatrice.addition(nbre1, nbre2)).not.toEqual(42);
      }
    );
    it('doit retourner la soustraction des deux nombres',
      ()=>{
        let maCalculatrice = new Calculatrice();
        let nbre1 = 15;
        let nbre2 = 7;
        expect(maCalculatrice.soustraction(nbre1, nbre2)).toEqual(8);
        expect(maCalculatrice.soustraction(nbre1, nbre2)).not.toEqual(42);
      }
    );
    it('doit retourner la somme des deux nombres',
      ()=>{
        let maCalculatrice = new Calculatrice();
        let nbre1 = 5;
        let nbre2 = 7;
        expect(maCalculatrice.multiplication(nbre1, nbre2)).toEqual(35);
        expect(maCalculatrice.multiplication(nbre1, nbre2)).not.toEqual(42);
      }
    );
    it('doit retourner la somme des deux nombres',
      ()=>{
        let maCalculatrice = new Calculatrice();
        let nbre1 = 14;
        let nbre2 = 7;
        expect(maCalculatrice.division(nbre1, nbre2)).toEqual(2);
        expect(maCalculatrice.division(nbre1, nbre2)).not.toEqual(42);
      }
    );
  }
)
