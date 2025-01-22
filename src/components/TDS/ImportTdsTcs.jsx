import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../Client Details/Backbutton';

const ImportTdsTcs = ({ clientRelId, clientFullName }) => {
    const [fileName, setFileName] = useState('Choose file');
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    // Style object for loading spinner
    const styles = {
        loadingSpinner: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50px',
            height: '50px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            display: isLoading ? 'block' : 'none'
        },
        '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        document.body.style.cursor = 'wait';

        const formData = new FormData();
        formData.append('tds_file', fileInputRef.current.files[0]);

        try {
            const response = await fetch(`/api/tds-tcs-import/${clientRelId}`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Handle successful upload
                console.log('File uploaded successfully');
            } else {
                // Handle error
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
            document.body.style.cursor = 'default';
        }
    };

    return (
        <section className="content">
            <div className="container-fluid">
                <div className="card card-default">
                    <div className="card-body">
                        <form id="importTdsTcsByPdf" onSubmit={handleSubmit}>
                            <div className="row justify-content-center my-5 text-content">
                                <div className="col-md-6">
                                    <div className="card card-default">
                                        <div className="card-header">
                                            <h3 className="card-title">Import TDS/TCS</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="input-group mb-3">
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        accept=".pdf"
                                                        id="tds_file"
                                                        ref={fileInputRef}
                                                        onChange={handleFileChange}
                                                        aria-describedby="input_tds_file"
                                                    />
                                                    <label className="custom-file-label" htmlFor="tds_file">
                                                        {fileName}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <input
                                                    type="submit"
                                                    style={{ width: 'fit-content' }}
                                                    className="btn btn-block btn-primary"
                                                    value="Upload"
                                                    disabled={isLoading}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    <BackButton link={'/client/tds-taxes/tds-tcs'}/>

                        {/* Loading Spinner */}
                        <div style={styles.loadingSpinner} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImportTdsTcs;
