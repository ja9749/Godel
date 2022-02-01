import {Button} from './Button';

export function Keyboard(props) {
    const {onClick} = props;

    return (
        <div className = {'keyboard'}>
            <div className = {'row'}>
                <Button onClick = {onClick} value = {'Q'}/>
                <Button onClick = {onClick} value = {'W'}/>
                <Button onClick = {onClick} value = {'E'}/>
                <Button onClick = {onClick} value = {'R'}/>
                <Button onClick = {onClick} value = {'T'}/>
                <Button onClick = {onClick} value = {'Y'}/>
                <Button onClick = {onClick} value = {'U'}/>
                <Button onClick = {onClick} value = {'I'}/>
                <Button onClick = {onClick} value = {'O'}/>
                <Button onClick = {onClick} value = {'P'}/>
            </div>
            <div className = {'row'}>
                <Button onClick = {onClick} value = {'A'}/>
                <Button onClick = {onClick} value = {'S'}/>
                <Button onClick = {onClick} value = {'D'}/>
                <Button onClick = {onClick} value = {'F'}/>
                <Button onClick = {onClick} value = {'G'}/>
                <Button onClick = {onClick} value = {'H'}/>
                <Button onClick = {onClick} value = {'J'}/>
                <Button onClick = {onClick} value = {'K'}/>
                <Button onClick = {onClick} value = {'L'}/>
            </div>
            <div className = {'row'}>
                <Button onClick = {onClick} value = {'Bk'}/>
                <Button onClick = {onClick} value = {'Z'}/>
                <Button onClick = {onClick} value = {'X'}/>
                <Button onClick = {onClick} value = {'C'}/>
                <Button onClick = {onClick} value = {'V'}/>
                <Button onClick = {onClick} value = {'B'}/>
                <Button onClick = {onClick} value = {'N'}/>
                <Button onClick = {onClick} value = {'M'}/>
                <Button onClick = {onClick} value = {'En'}/>
            </div>
        </div>
    );
}
