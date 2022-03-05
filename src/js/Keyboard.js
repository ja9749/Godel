import {Button} from './Button';

export function Keyboard(props) {
    const {alphabet, onClick} = props;

    return (
        <div className = {'keyboard'}>
            <div className = {'keyboard-row'}>
                <Button className = {alphabet['Q']} onClick = {onClick} value = {'Q'}/>
                <Button className = {alphabet['W']} onClick = {onClick} value = {'W'}/>
                <Button className = {alphabet['E']} onClick = {onClick} value = {'E'}/>
                <Button className = {alphabet['R']} onClick = {onClick} value = {'R'}/>
                <Button className = {alphabet['T']} onClick = {onClick} value = {'T'}/>
                <Button className = {alphabet['Y']} onClick = {onClick} value = {'Y'}/>
                <Button className = {alphabet['U']} onClick = {onClick} value = {'U'}/>
                <Button className = {alphabet['I']} onClick = {onClick} value = {'I'}/>
                <Button className = {alphabet['O']} onClick = {onClick} value = {'O'}/>
                <Button className = {alphabet['P']} onClick = {onClick} value = {'P'}/>
            </div>
            <div className = {'keyboard-row'}>
                <Button className = {alphabet['A']} onClick = {onClick} value = {'A'}/>
                <Button className = {alphabet['S']} onClick = {onClick} value = {'S'}/>
                <Button className = {alphabet['D']} onClick = {onClick} value = {'D'}/>
                <Button className = {alphabet['F']} onClick = {onClick} value = {'F'}/>
                <Button className = {alphabet['G']} onClick = {onClick} value = {'G'}/>
                <Button className = {alphabet['H']} onClick = {onClick} value = {'H'}/>
                <Button className = {alphabet['J']} onClick = {onClick} value = {'J'}/>
                <Button className = {alphabet['K']} onClick = {onClick} value = {'K'}/>
                <Button className = {alphabet['L']} onClick = {onClick} value = {'L'}/>
            </div>
            <div className = {'keyboard-row'}>
                <Button className = {'longer'} onClick = {onClick} value = {'Back'}/>
                <Button className = {alphabet['Z']} onClick = {onClick} value = {'Z'}/>
                <Button className = {alphabet['X']} onClick = {onClick} value = {'X'}/>
                <Button className = {alphabet['C']} onClick = {onClick} value = {'C'}/>
                <Button className = {alphabet['V']} onClick = {onClick} value = {'V'}/>
                <Button className = {alphabet['B']} onClick = {onClick} value = {'B'}/>
                <Button className = {alphabet['N']} onClick = {onClick} value = {'N'}/>
                <Button className = {alphabet['M']} onClick = {onClick} value = {'M'}/>
                <Button className = {'longer'} onClick = {onClick} value = {'Enter'}/>
            </div>
        </div>
    );
}
