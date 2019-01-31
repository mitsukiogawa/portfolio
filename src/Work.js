import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Work extends Component {
    render() {
        return (
            <Col className="">
                <h1><i class="fas fa-desktop "></i> Work PAGE</h1>

                    <div class="box">
                    <div class="work">
                      <p>〜会社実績〜</p>
                      <div class="wrap">
                        <a href="https://CareOffers.com/">
                          <div id="workImg1"></div>
                          <div class="box-title">
                          <p>介護施設探しマッチングサービスCareOffersの<br />フロント、サーバー側の制作</p>
                          <p>言語：HTML, css, php, js フレームワークなし</p>
                        </div>
                        </a>
                        <div>
                          <div id="workImg2"></div>
                          <div class="box-title">
                          <p>成約管理システム制作 ※こちらはリンクではございません。</p>
                          <p>言語：vue.js, laravel, adminlte</p>
                        </div>
                    </div>
                      </div>
                    </div>
                    <div class="work">
                      <p>〜ポートフォリオ〜</p>
                      <div class="wrap">
                        <div>
                          <div id="workImg3"></div>
                          <div class="box-title">
                          <p></p>
                          <p>言語：react, HTML, css</p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

            </Col>
        );
    }
}
