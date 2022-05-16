
import { MyDisplay } from "../core/myDisplay";
import { Conf } from "../core/conf";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _id:number;
  private _addClassName:string;
  private _el:Array<HTMLElement> = [];

  constructor(opt:any) {
    super(opt)

    this._id = opt.id;
    this._addClassName = Conf.instance.TEXT.substring(0, this._id + 1);

    this._el.push(document.body)
    this._el.push(document.querySelector('body > div') as HTMLElement)
    this._el.push(document.querySelector('head') as HTMLElement)

    this._setHover();

    this._resize();
  }


  //
  protected _eRollOver() {
    this._el.forEach((val) => {
      val.classList.add(this._addClassName);
    })
  }


  //
  protected _eRollOut() {
    this._el.forEach((val) => {
      val.classList.remove(this._addClassName);
    })
  }




  protected _update(): void {
    super._update();


  }


  protected _resize(): void {
    super._resize();

  }

}