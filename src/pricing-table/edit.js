import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, PanelColorSettings, InnerBlocks  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl,  __experimentalNumberControl as NumberControl } from '@wordpress/components';
import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const {
        title, starterTitle, starterPrice, premiumTitle, premiumPrice, businessTitle, businessPrice,
        starterBtnText, starterBtnUrl, premiumBtnText, premiumBtnUrl, businessBtnText, businessBtnUrl,
        starterBg, premiumBg, businessBg, starterColor, premiumColor, businesscolor, starterBtnColor,
        starterBtnBg, businessBtnColor, businessBtnBg, premiumTextColor, premiumBgColor,starterContent,
		premiumContent,businessContent,
    } = attributes;

    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
        { name: 'dark', color: '#333333' },
    ];

    return (
        <div { ...useBlockProps() }>
            <InspectorControls key="setting">
                <Panel>
                    <PanelBody title='Header' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Change Pricing text', 'fbs-blocks') }
                            value={title}
                            onChange={ (title) => setAttributes( {title: title} ) }
                        />
                    </PanelBody>

                    <PanelBody title='Starter' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Title text', 'fbs-blocks') }
                            value={starterTitle}
                            onChange={ (title) => setAttributes( {starterTitle: title} ) }
                        />
                        <NumberControl className="blocks-base-control__input"
                            label={ __('Price', 'fbs-blocks') }
                            isShiftStepEnabled={ true }
                            shiftStep={ 10 }
                            value={starterPrice}
                            onChange={ (price) => setAttributes( {starterPrice: price} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button text', 'fbs-blocks') }
                            value={starterBtnText}
                            onChange={ (btnText) => setAttributes( {starterBtnText: btnText} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button Url', 'fbs-blocks') }
                            value={starterBtnUrl}
                            onChange={ (btnUrl) => setAttributes( {starterBtnUrl: btnUrl} ) }
                        />
                        <PanelColorSettings
                            title = { __('Colors', 'fbs-blocks') }
                            initialOpen={false}
                            colors={colors}
                            colorSettings={[
                                {
                                    value:starterBg,
                                    onChange: (color) => setAttributes( {starterBg: color} ),
                                    label: __('Card Background', 'fbs-blocks')
                                },
                                {
                                    value:starterColor,
                                    onChange: (color) => setAttributes( {starterColor: color} ),
                                    label: __('Card Text Color', 'fbs-blocks')
                                },
                                {
                                    value:starterBtnColor,
                                    onChange: (color) => setAttributes( {starterBtnColor: color} ),
                                    label: __(' Button Text Color', 'fbs-blocks')
                                },
                                {
                                    value:starterBtnBg,
                                    onChange: (color) => setAttributes( {starterBtnBg: color} ),
                                    label: __('Button Background Color', 'fbs-blocks')
                                },
                            ]}
                        />
                    </PanelBody>

                    <PanelBody title='Premium' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Title text', 'fbs-blocks') }
                            value={premiumTitle}
                            onChange={ (title) => setAttributes( {premiumTitle: title} ) }
                        />
                        <NumberControl className="blocks-base-control__input"
                            label={ __('Price', 'fbs-blocks') }
                            isShiftStepEnabled={ true }
                            shiftStep={ 10 }
                            value={premiumPrice}
                            onChange={ (price) => setAttributes( {premiumPrice: price} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button text', 'fbs-blocks') }
                            value={premiumBtnText}
                            onChange={ (btnText) => setAttributes( {premiumBtnText: btnText} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button Url', 'fbs-blocks') }
                            value={premiumBtnUrl}
                            onChange={ (btnUrl) => setAttributes( {premiumBtnUrl: btnUrl} ) }
                        />
                        <PanelColorSettings
                            title = { __('Colors', 'fbs-blocks') }
                            initialOpen={false}
                            colors={colors}
                            colorSettings={[
                                {
                                    value:premiumBg,
                                    onChange: (color) => setAttributes( {premiumBg: color} ),
                                    label: __('Card Background', 'fbs-blocks')
                                },
                                {
                                    value:premiumColor,
                                    onChange: (color) => setAttributes( {premiumColor: color} ),
                                    label: __('Text Color', 'fbs-blocks')
                                },
                                {
                                    value:premiumTextColor,
                                    onChange: (color) => setAttributes( {premiumTextColor: color} ),
                                    label: __('Button Text Color', 'fbs-blocks')
                                },
                                {
                                    value:premiumBgColor,
                                    onChange: (color) => setAttributes( {premiumBgColor: color} ),
                                    label: __('Button Background Color', 'fbs-blocks')
                                },
                            ]}
                        />
                    </PanelBody>

                    <PanelBody title='Business' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Title text', 'fbs-blocks') }
                            value={businessTitle}
                            onChange={ (title) => setAttributes( {businessTitle: title} ) }
                        />
                        <NumberControl className="blocks-base-control__input"
                            label={ __('Price', 'fbs-blocks') }
                            isShiftStepEnabled={ true }
                            shiftStep={ 10 }
                            value={businessPrice}
                            onChange={ (price) => setAttributes( {businessPrice: price} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button text', 'fbs-blocks') }
                            value={businessBtnText}
                            onChange={ (btnText) => setAttributes( {businessBtnText: btnText} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button Url', 'fbs-blocks') }
                            value={businessBtnUrl}
                            onChange={ (btnUrl) => setAttributes( {businessBtnUrl: btnUrl} ) }
                        />
                        <PanelColorSettings
                            title = { __('Colors', 'fbs-blocks') }
                            initialOpen={false}
                            colors={colors}
                            colorSettings={[
                                {
                                    value:businessBg,
                                    onChange: (color) => setAttributes( {businessBg: color} ),
                                    label: __('Card Background', 'fbs-blocks')
                                },
                                {
                                    value:businesscolor,
                                    onChange: (color) => setAttributes( {businesscolor: color} ),
                                    label: __('Card Text Color', 'fbs-blocks')
                                },
                                {
                                    value:businessBtnColor,
                                    onChange: (color) => setAttributes( {businessBtnColor: color} ),
                                    label: __('Button Text Color', 'fbs-blocks')
                                },
                                {
                                    value:businessBtnBg,
                                    onChange: (color) => setAttributes( {businessBtnBg: color} ),
                                    label: __('Button Background Color', 'fbs-blocks')
                                },
                            ]}
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div className='fbs-pricing-table'>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="fbs-cards">
                    <div className="fbs-card shadow" style={{background:starterBg,color:starterColor}}>
                        <h3 className="pack" style={{color:starterColor}}>{starterTitle}</h3>
                        <h2 id="starter" className="price bottom-bar" style={{color:starterColor}}>${starterPrice}</h2>
						<InnerBlocks
							allowedBlocks={['core/list']}
							template={[
								['core/list'],
							]}
							templateLock="all"
							value={attributes.starterContent}
							onChange={(value) => setAttributes({ starterContent: value })}
						/>
                        <a href={starterBtnUrl}>
                            <button className="btn active-btn" style={{background:starterBtnBg,color:starterBtnColor}}>
                                {starterBtnText}
                            </button>
                        </a>
                    </div>
                    <div className="fbs-card active" style={{background:premiumBg,color:premiumColor}}>
                        <h3 className="pack" style={{color:premiumColor}}>{premiumTitle}</h3>
                        <h2 id="premium" className="price bottom-bar" style={{color:premiumColor}}>${premiumPrice}</h2>
						{/* <InnerBlocks
							allowedBlocks={['core/list']}
							template={[
								['core/list'],
							]}
							templateLock="all"
							value={attributes.premiumContent}
							onChange={(value) => setAttributes({ premiumContent: value })}
						/> */}
                        <a href={premiumBtnUrl}>
                            <button className="btn active-btn" style={{background:premiumBgColor,color:premiumTextColor}}>
                                {premiumBtnText}
                            </button>
                        </a>
                    </div>
                    <div className="fbs-card shadow" style={{background:businessBg,color:businesscolor}}>
                        <h3 className="pack" style={{color:businesscolor}}>{businessTitle}</h3>
                        <h2 id="business" className="price bottom-bar" style={{color:businesscolor}}>${businessPrice}</h2>
						{/* <InnerBlocks
							allowedBlocks={['core/list']}
							template={[
								['core/list'],
							]}
							templateLock="all"
							value={attributes.businessContent}
							onChange={(value) => setAttributes({ businessContent: value })}
						/> */}
                        <a href={businessBtnUrl}>
                            <button className="btn active-btn" style={{background:businessBtnBg,color:businessBtnColor}}>
                                {businessBtnText}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
