import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
// import { getDictionary } from '@/app/utils/dictionaries';
// import { Locale } from '@/i18n/i18n-config';

export default async function Statistics({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
// function Document() {
  return (
    <section className="section-style document-section" id="documentSection">
      <div className="document-area">
        <div className="container fluid">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div
                className="document-banner"
                style={{
                  backgroundImage: `url(${'/img/Mask-Document.png'})`,
                }}>
                <div className="banner-img">
                  <Image
                    src="/img/EDITION.png"
                    alt="document banner"
                    width={246}
                    height={59}
                    className="img-fluid"
                  />
                </div>
                <h1 className="main-title banner-title text-center">
                  {page.home.document.title}
                  {/* مسـتندات الصندوقــ */}
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              {/* <div className="document-tabs tabs-area">
                <div className="tabs-btn-list">
                  <button
                    type="button"
                    role="tab"
                    className="tab-btn active"
                    data-target="financial-statements">
                    القوائم المالية
                  </button>
                  <button
                    type="button"
                    role="tab"
                    className="tab-btn"
                    data-target="annual-reports">
                    التقارير السنوية
                  </button>
                  <button
                    type="button"
                    role="tab"
                    className="tab-btn d-none"
                    data-target="CQA">
                    الأسئلة الشائعة{' '}
                  </button>
                </div>
                <div className="tabs-content-list">
                  <div className="tab-content financial-statements active">
                    <div className="docs-row">
                      <div className="row row-cols-md-2">
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content annual-reports">
                    <div className="docs-row">
                      <div className="row row-cols-md-2">
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="doc-wrap">
                          <div className="doc-box">
                            <div className="doc-info">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="16"
                                viewBox="0 0 512 512">
                                <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                              </svg>
                              <span className="doc-title">
                                القوائم المالية لسنة 2022
                              </span>
                            </div>
                            <button
                              type="button"
                              className="download-btn"
                              role="downlaod"
                              title="downlaod">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_889)">
                                  <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_889">
                                    <rect width="24" height="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content CQA d-none"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

