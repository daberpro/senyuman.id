import '../sass/global.scss';
import '../sass/ui-menu.scss';
export function Menu({kind}){

    return (
        <div className="category">
            {
                kind.map((d,i) =>{
                    return (
                        <div key={i} className="kind">
                            <b>{d.title}</b>
                            {(d.amount > 50)? '50+' : d.amount} Design UI KIT
                        </div>
                    );
                })
            }
        </div>
    );

}