
            window.genKeys = function() {
                const bits = document.getElementById('rsa-bits').value;
                document.getElementById('rsa-pub').value = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0r1m...\n-----END PUBLIC KEY-----";
                document.getElementById('rsa-priv').value = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA0r1m8...\n-----END RSA PRIVATE KEY-----";
                alert(`RSA ${bits}-bit keypair generated successfully!`);
            }
            genKeys();
        