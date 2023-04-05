import React, { Component } from 'react';
import '../main.scss';

class Programs extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className='program-description-container'>
          <div className='program-profile-container'>
            <h1>Programs <br/>&  Education</h1>
            <small>Brow & SMP Design Shop<br />by Ji-Hee Shin</small>
            <div className="program-about-text">"Beauty begins the moment you decide to be yourself." —Coco Chanel </div>
          </div>
          <div className="main-image-container"></div>
        </div>
        <div className="program-container">
          <div className="program-item">
            <dl>
              <dt>반영구화장개념</dt>
              <dd>반영구화장</dd>
              <dd>피부특징</dd>
              <dd>반영구화장과</dd>
              <dd>색채학</dd>
              <dd>피부학</dd>
            </dl>
          </div>
          <div className="program-item">
            <dl>
              <dt>눈썹반영구의 종류</dt>
              <dd>엠보(자연눈썹)</dd>
              <dd>수지기법</dd>
              <dd>중화눈썹</dd>
              <dd>콤보기법</dd>
              <dd>그라데이션기법</dd>
              <dd>리터치</dd>
            </dl>
          </div>
          <div className="program-item">
            <dl>
              <dt>얼국형에 따른 눈썹모양</dt>
              <dd>눈썹디자인 잘 잡는 법</dd>
              <dd>눈썹형태에 따른 디자인</dd>
            </dl>
          </div>
          <div className="program-item">
            <dl>
              <dt>기타</dt>
              <dd>부작용사례</dd>
              <dd>소독과위생</dd>
              <dd>*시술 후 안내사항</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}

export default Programs;