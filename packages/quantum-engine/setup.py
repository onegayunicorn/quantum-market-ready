from setuptools import setup, find_packages

setup(
    name='quantum-engine',
    version='1.0.0',
    description='Quantum computation engine for market simulation',
    author='Sovereign Core Research Pty Ltd',
    packages=find_packages(where='src'),
    package_dir={'': 'src'},
    python_requires='>=3.11',
    install_requires=[
        'numpy>=1.24.0',
    ],
    extras_require={
        'dev': ['pytest', 'pytest-cov', 'black', 'mypy'],
    },
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Science/Research',
        'Programming Language :: Python :: 3.11',
    ],
)